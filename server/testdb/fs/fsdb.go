package fs

import (
	"encoding/json"
	"errors"
	"fmt"
	"os"
	"path"
	"path/filepath"

	"github.com/denisbrodbeck/machineid"
	_ "github.com/golang-migrate/migrate/v4/source/file"
	"github.com/joho/godotenv"
	"github.com/kubeshop/tracetest/server/model"
	"github.com/kubeshop/tracetest/server/model/yaml"
	"github.com/kubeshop/tracetest/server/testdb"
	"golang.org/x/exp/slices"
)

type fsDB struct {
	root    string
	dbsPath string
}

func New(root string) (model.Repository, error) {
	ps := &fsDB{
		root:    root,
		dbsPath: path.Join(root, ".tracetest/"),
	}

	err := ps.ready()
	if err != nil {
		return nil, err
	}

	return ps, nil
}

func (td *fsDB) ready() error {
	if err := mkdir(td.root); err != nil {
		return err
	}

	if err := mkdir(td.dbsPath); err != nil {
		return err
	}

	return nil
}

func mkdir(pathName string) error {
	err := os.Mkdir(pathName, 0755)
	if err != nil {
		if errors.Is(err, os.ErrExist) {
			return nil
		}
		return err
	}
	return nil
}

func (td *fsDB) dbPath(name string) string {
	return path.Join(td.dbsPath, name)
}

func (td *fsDB) runs(testID string) fileDB[int, model.Run] {
	return fileDB[int, model.Run]{
		path: td.dbPath("run_" + testID + ".json"),
	}
}

func (td *fsDB) config() fileDB[string, string] {
	return fileDB[string, string]{
		path: td.dbPath("config.json"),
	}
}

func (td *fsDB) ServerID() (id string, isNew bool, err error) {
	id, err = td.config().get("serverID")
	if err != nil && !errors.Is(err, testdb.ErrNotFound) {
		err = fmt.Errorf("could not get machineID: %w", err)
		return
	}

	if id != "" {
		isNew = false
		return
	}

	// no id, let's creat it
	isNew = true
	id, err = machineid.ProtectedID("tracetest")
	if err != nil {
		err = fmt.Errorf("could not get machineID: %w", err)
		return
	}
	id = id[:10] // limit lenght to avoid issues with GA

	if err != nil {
		err = fmt.Errorf("could not get machineID: %w", err)
		return
	}
	err = td.config().write("serverID", id)
	if err != nil {
		err = fmt.Errorf("could not save serverID into DB: %w", err)
		return
	}

	return
}

type fileDB[K comparable, V any] struct {
	path string
}

func (fdb fileDB[K, V]) read() (map[K]V, error) {
	b, err := os.ReadFile(fdb.path)
	if err != nil {
		if errors.Is(err, os.ErrNotExist) {
			// allow working with not existing dbs
			return nil, nil
		}

		return nil, err
	}

	var contents map[K]V
	err = json.Unmarshal(b, &contents)
	if err != nil {
		return nil, err
	}

	return contents, nil
}

func (fdb fileDB[K, V]) get(key K) (v V, err error) {
	rows, err := fdb.read()
	if err != nil {
		err = fmt.Errorf("cannot read db %s: %w", fdb.path, err)
		return
	}

	row, exists := rows[key]
	if !exists {
		err = testdb.ErrNotFound
		return
	}

	return row, nil
}

func (fdb fileDB[K, V]) write(key K, val V) error {
	db, err := fdb.read()
	if err != nil {
		return err
	}
	if db == nil {
		db = make(map[K]V)
	}

	db[key] = val

	encoded, err := json.Marshal(db)
	if err != nil {
		return err
	}

	return os.WriteFile(fdb.path, encoded, 0644)
}

type file struct {
	path string
	info os.FileInfo
}

func (f file) write(in yaml.File) error {
	b, err := in.Encode()
	if err != nil {
		return fmt.Errorf("cannot encode input for file %s: %w", f.path, err)
	}

	os.WriteFile(f.path, b, 0644)
	if err != nil {
		return fmt.Errorf("cannot write file %s: %w", f.path, err)
	}

	return nil
}

func (f file) readYaml() (yaml.File, error) {
	b, err := os.ReadFile(f.path)
	if err != nil {
		return yaml.File{}, fmt.Errorf("cannot read file %s: %w", f.path, err)
	}

	yf, err := yaml.Decode(b)
	if err != nil {
		return yaml.File{}, fmt.Errorf("cannot decode file %s: %w", f.path, err)
	}

	return yf, nil
}

func (f file) readEnv() (map[string]string, error) {
	b, err := os.ReadFile(f.path)
	if err != nil {
		return nil, fmt.Errorf("cannot read file %s: %w", f.path, err)
	}
	return godotenv.Unmarshal(string(b))

}

func (f file) isYaml() bool {
	return slices.Contains([]string{".yaml", ".yml"}, filepath.Ext(f.path))
}

func (f file) isEnv() bool {
	return slices.Contains([]string{".env"}, filepath.Ext(f.path))
}

func (td *fsDB) getFiles() ([]file, error) {
	return td.readDir(td.root)
}

func (td *fsDB) readDir(path string) ([]file, error) {
	var files []file
	err := filepath.Walk(path,
		func(path string, info os.FileInfo, err error) error {
			if err != nil {
				return err
			}
			files = append(files, file{path, info})
			return nil
		})
	if err != nil {
		return nil, err
	}

	return files, nil
}

func (td *fsDB) Drop() error {
	panic("not implemented")
}

func (td *fsDB) envs() fileDB[string, model.Environment] {
	return fileDB[string, model.Environment]{
		path: td.dbPath("envs.json"),
	}
}
