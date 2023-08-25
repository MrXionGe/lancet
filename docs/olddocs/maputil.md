# Maputil

Package maputil includes some functions to manipulate map.

<div STYLE="page-break-after: always;"></div>

## Source:

-   [https://github.com/duke-git/lancet/blob/main/maputil/map.go](https://github.com/duke-git/lancet/blob/main/maputil/map.go)

<div STYLE="page-break-after: always;"></div>

## Example:

```go
import (
    "github.com/duke-git/lancet/v2/maputil"
)
```

<div STYLE="page-break-after: always;"></div>

## Index

-   [MapTo](#MapTo)
-   [ForEach](#ForEach)
-   [Filter](#Filter)
-   [FilterByKeys](#FilterByKeys)
-   [FilterByValues](#FilterByValues)
-   [OmitBy](#OmitBy)
-   [OmitByKeys](#OmitByKeys)
-   [OmitByValues](#OmitByValues)
-   [Intersect](#Intersect)
-   [Keys](#Keys)
-   [Values](#Values)
-   [KeysBy](#KeysBy)
-   [ValuesBy](#ValuesBy)
-   [MapKeys](#MapKeys)
-   [MapValues](#MapValues)
-   [Entries](#Entries)
-   [FromEntries](#FromEntries)
-   [Transform](#Transform)
-   [Merge](#Merge)
-   [Minus](#Minus)
-   [IsDisjoint](#IsDisjoint)
-   [HasKey](#HasKey)
-   [NewConcurrentMap](#NewConcurrentMap)
-   [ConcurrentMap_Get](#ConcurrentMap_Get)
-   [ConcurrentMap_Set](#ConcurrentMap_Set)
-   [ConcurrentMap_GetOrSet](#ConcurrentMap_GetOrSet)
-   [ConcurrentMap_Delete](#ConcurrentMap_Delete)
-   [ConcurrentMap_GetAndDelete](#ConcurrentMap_GetAndDelete)
-   [ConcurrentMap_Has](#ConcurrentMap_Has)
-   [ConcurrentMap_Range](#ConcurrentMap_Range)

<div STYLE="page-break-after: always;"></div>

## Documentation

### <span id="MapTo">MapTo</span>

<p>Rry to map any interface to struct or base type.</p>

<b>Signature:</b>

```go
func MapTo(src any, dst any) error
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    type (
        Person struct {
            Name  string  `json:"name"`
            Age   int     `json:"age"`
            Phone string  `json:"phone"`
            Addr  Address `json:"address"`
        }

        Address struct {
            Street string `json:"street"`
            Number int    `json:"number"`
        }
    )

    personInfo := map[string]interface{}{
        "name":  "Nothin",
        "age":   28,
        "phone": "123456789",
        "address": map[string]interface{}{
            "street": "test",
            "number": 1,
        },
    }

    var p Person
    err := MapTo(personInfo, &p)

    fmt.Println(err)
    fmt.Println(p)

    // Output:
    // <nil>
    // {Nothin 28 123456789 {test 1}}
}
```

### <span id="ForEach">ForEach</span>

<p>Executes iteratee funcation for every key and value pair in map.</p>

<b>Signature:</b>

```go
func ForEach[K comparable, V any](m map[K]V, iteratee func(key K, value V))
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    m := map[string]int{
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
    }

    var sum int

    maputil.ForEach(m, func(_ string, value int) {
        sum += value
    })

    fmt.Println(sum)

    // Output:
    // 10
}
```

### <span id="Filter">Filter</span>

<p>Iterates over map, return a new map contains all key and value pairs pass the predicate function.</p>

<b>Signature:</b>

```go
func Filter[K comparable, V any](m map[K]V, predicate func(key K, value V) bool) map[K]V
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    m := map[string]int{
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
    }
    isEven := func(_ string, value int) bool {
        return value%2 == 0
    }

    maputil.Filter(m, func(_ string, value int) {
        sum += value
    })

    result := maputil.Filter(m, isEven)

    fmt.Println(result)

    // Output:
    // map[b:2 d:4]
}
```

### <span id="FilterByKeys">FilterByKeys</span>

<p>Iterates over map, return a new map whose keys are all given keys.</p>

<b>Signature:</b>

```go
func FilterByKeys[K comparable, V any](m map[K]V, keys []K) map[K]V
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    m := map[string]int{
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
    }

    result := maputil.FilterByKeys(m, []string{"a", "b"})

    fmt.Println(result)

    // Output:
    // map[a:1 b:2]
}
```

### <span id="FilterByValues">FilterByValues</span>

<p>Iterates over map, return a new map whose values are all given values.</p>

<b>Signature:</b>

```go
func FilterByValues[K comparable, V comparable](m map[K]V, values []V) map[K]V
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    m := map[string]int{
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
    }

    result := maputil.FilterByValues(m, []int{3, 4})

    fmt.Println(result)

    // Output:
    // map[c:3 d:4]
}
```

### <span id="OmitBy">OmitBy</span>

<p>OmitBy is the opposite of Filter, removes all the map elements for which the predicate function returns true.</p>

<b>Signature:</b>

```go
func OmitBy[K comparable, V any](m map[K]V, predicate func(key K, value V) bool) map[K]V
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    m := map[string]int{
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
    }
    isEven := func(_ string, value int) bool {
        return value%2 == 0
    }

    result := maputil.OmitBy(m, isEven)

    fmt.Println(result)

    // Output:
    // map[a:1 c:3 e:5]
}
```

### <span id="OmitByKeys">OmitByKeys</span>

<p>The opposite of FilterByKeys, extracts all the map elements which keys are not omitted.</p>

<b>Signature:</b>

```go
func OmitByKeys[K comparable, V any](m map[K]V, keys []K) map[K]V
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    m := map[string]int{
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
    }

    result := maputil.OmitByKeys(m, []string{"a", "b"})

    fmt.Println(result)

    // Output:
    // map[c:3 d:4 e:5]
}
```

### <span id="OmitByValues">OmitByValues</span>

<p>The opposite of FilterByValues. remov all elements whose value are in the give slice.</p>

<b>Signature:</b>

```go
func OmitByValues[K comparable, V comparable](m map[K]V, values []V) map[K]V
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    m := map[string]int{
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
    }

    result := maputil.OmitByValues(m, []int{4, 5})

    fmt.Println(result)

    // Output:
    // map[a:1 b:2 c:3]
}
```

### <span id="Intersect">Intersect</span>

<p>Iterates over maps, return a new map of key and value pairs in all given maps.</p>

<b>Signature:</b>

```go
func Intersect[K comparable, V any](maps ...map[K]V) map[K]V
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    m1 := map[string]int{
        "a": 1,
        "b": 2,
        "c": 3,
    }

    m2 := map[string]int{
        "a": 1,
        "b": 2,
        "c": 6,
        "d": 7,
    }

    m3 := map[string]int{
        "a": 1,
        "b": 9,
        "e": 9,
    }

    result1 := maputil.Intersect(m1)
    result2 := maputil.Intersect(m1, m2)
    result3 := maputil.Intersect(m1, m2, m3)

    fmt.Println(result1)
    fmt.Println(result2)
    fmt.Println(result3)

    // Output:
    // map[a:1 b:2 c:3]
    // map[a:1 b:2]
    // map[a:1]
}
```

### <span id="Keys">Keys</span>

<p>Returns a slice of the map's keys.</p>

<b>Signature:</b>

```go
func Keys[K comparable, V any](m map[K]V) []K
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "sort"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    m := map[int]string{
        1: "a",
        2: "a",
        3: "b",
        4: "c",
        5: "d",
    }

    keys := maputil.Keys(m)
    sort.Ints(keys)

    fmt.Println(keys)

    // Output:
    // [1 2 3 4 5]
}
```

### <span id="Merge">Merge</span>

<p>Merge maps, next key will overwrite previous key.</p>

<b>Signature:</b>

```go
func Merge[K comparable, V any](maps ...map[K]V) map[K]V
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    m1 := map[int]string{
        1: "a",
        2: "b",
    }
    m2 := map[int]string{
        1: "1",
        3: "2",
    }

    result := maputil.Merge(m1, m2)

    fmt.Println(result)

    // Output:
    // map[1:c 2:b 3:d]
}
```

### <span id="Minus">Minus</span>

<p>Creates an map of whose key in mapA but not in mapB.</p>

<b>Signature:</b>

```go
func Minus[K comparable, V any](mapA, mapB map[K]V) map[K]V
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    m1 := map[string]int{
        "a": 1,
        "b": 2,
        "c": 3,
    }

    m2 := map[string]int{
        "a": 11,
        "b": 22,
        "d": 33,
    }

    result := maputil.Minus(m1, m2)

    fmt.Println(result)

    // Output:
    // map[c:3]
}
```

### <span id="Values">Values</span>

<p>Returns a slice of the map's values.</p>

<b>Signature:</b>

```go
func Values[K comparable, V any](m map[K]V) []V
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "sort"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    m := map[int]string{
        1: "a",
        2: "a",
        3: "b",
        4: "c",
        5: "d",
    }

    values := maputil.Values(m)
    sort.Strings(values)

    fmt.Println(values)

    // Output:
    // [a a b c d]
}
```

### <span id="KeysBy">KeysBy</span>

<p>Creates a slice whose element is the result of function mapper invoked by every map's key.</p>

<b>Signature:</b>

```go
func KeysBy[K comparable, V any, T any](m map[K]V, mapper func(item K) T) []T
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "sort"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    m := map[int]string{
        1: "a",
        2: "a",
        3: "b",
    }

    keys := maputil.KeysBy(m, func(n int) int {
        return n + 1
    })

    sort.Ints(keys)

    fmt.Println(keys)

    // Output:
    // [2 3 4]
}
```

### <span id="ValuesBy">ValuesBy</span>

<p>Creates a slice whose element is the result of function mapper invoked by every map's value.</p>

<b>Signature:</b>

```go
func ValuesBy[K comparable, V any, T any](m map[K]V, mapper func(item V) T) []T
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "sort"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    m := map[int]string{
        1: "a",
        2: "b",
        3: "c",
    }
    values := maputil.ValuesBy(m, func(v string) string {
        switch v {
        case "a":
            return "a-1"
        case "b":
            return "b-2"
        case "c":
            return "c-3"
        default:
            return ""
        }
    })

    sort.Strings(values)

    fmt.Println(values)

    // Output:
    // [a-1 b-2 c-3]
}
```

### <span id="MapKeys">MapKeys</span>

<p>Transforms a map to other type map by manipulating it's keys.</p>

<b>Signature:</b>

```go
func MapKeys[K comparable, V any, T comparable](m map[K]V, iteratee func(key K, value V) T) map[T]V
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "strconv"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    m := map[int]string{
        1: "a",
        2: "b",
        3: "c",
    }

    result := maputil.MapKeys(m, func(k int, _ string) string {
        return strconv.Itoa(k)
    })

    fmt.Println(result)

    // Output:
    // map[1:a 2:b 3:c]
}
```

### <span id="MapValues">MapValues</span>

<p>Transforms a map to other type map by manipulating it's values.</p>

<b>Signature:</b>

```go
func MapValues[K comparable, V any, T any](m map[K]V, iteratee func(key K, value V) T) map[K]T
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "strconv"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    m := map[int]string{
        1: "a",
        2: "b",
        3: "c",
    }

    result := maputil.MapValues(m, func(k int, v string) string {
        return v + strconv.Itoa(k)
    })

    fmt.Println(result)

    // Output:
    // map[1:a1 2:b2 3:c3]
}
```

### <span id="Entry">Entry</span>

<p>Transforms a map into array of key/value pairs.</p>

<b>Signature:</b>

```go
type Entry[K comparable, V any] struct {
    Key   K
    Value V
}
func Entries[K comparable, V any](m map[K]V) []Entry[K, V]
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "sort"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    m := map[string]int{
        "a": 1,
        "b": 2,
        "c": 3,
    }

    result := maputil.Entries(m)

    sort.Slice(result, func(i, j int) bool {
        return result[i].Value < result[j].Value
    })

    fmt.Println(result)

    // Output:
    // [{a 1} {b 2} {c 3}]
}
```

### <span id="FromEntries">FromEntries</span>

<p>Creates a map based on a slice of key/value pairs.</p>

<b>Signature:</b>

```go
type Entry[K comparable, V any] struct {
    Key   K
    Value V
}
func FromEntries[K comparable, V any](entries []Entry[K, V]) map[K]V
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    result := maputil.FromEntries([]Entry[string, int]{
        {Key: "a", Value: 1},
        {Key: "b", Value: 2},
        {Key: "c", Value: 3},
    })

    fmt.Println(result)

    // Output:
    // map[a:1 b:2 c:3]
}
```

### <span id="Transform">Transform</span>

<p>Transform a map to another type map.</p>

<b>Signature:</b>

```go
func Transform[K1 comparable, V1 any, K2 comparable, V2 any](m map[K1]V1, iteratee func(key K1, value V1) (K2, V2)) map[K2]V2
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "strconv"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    m := map[string]int{
        "a": 1,
        "b": 2,
        "c": 3,
    }

    result := Transform(m, func(k string, v int) (string, string) {
        return k, strconv.Itoa(v)
    })

    fmt.Println(result)

    // Output:
    // map[a:1 b:2 c:3]
}
```

### <span id="IsDisjoint">IsDisjoint</span>

<p>Checks two maps are disjoint if they have no keys in common.</p>

<b>Signature:</b>

```go
func IsDisjoint[K comparable, V any](mapA, mapB map[K]V) bool
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    m1 := map[string]int{
        "a": 1,
        "b": 2,
        "c": 3,
    }

    m2 := map[string]int{
        "d": 22,
    }

    m3 := map[string]int{
        "a": 22,
    }

    result1 := maputil.IsDisjoint(m1, m2)
    result2 := maputil.IsDisjoint(m1, m3)

    fmt.Println(result1)
    fmt.Println(result2)

    // Output:
    // true
    // false
}
```

### <span id="HasKey">HasKey</span>

<p>Checks if map has key or not. This function is used to replace the following boilerplate code:</p>

```go
_, haskey := amap["baz"];

if haskey {
    fmt.Println("map has key baz")
}
```

<b>Signature:</b>

```go
func HasKey[K comparable, V any](m map[K]V, key K) bool
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    m := map[string]int{
        "a": 1,
        "b": 2,
    }

    result1 := maputil.HasKey(m, "a")
    result2 := maputil.HasKey(m, "c")

    fmt.Println(result1)
    fmt.Println(result2)

    // Output:
    // true
    // false
}
```

### <span id="NewConcurrentMap">NewConcurrentMap</span>

<p>ConcurrentMap is like map, but is safe for concurrent use by multiple goroutines.</p>

<b>Signature:</b>

```go
// NewConcurrentMap create a ConcurrentMap with specific shard count.
func NewConcurrentMap[K comparable, V any](shardCount int) *ConcurrentMap[K, V]
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    // create a ConcurrentMap whose key type is string, value type is int
    cm := maputil.NewConcurrentMap[string, int](100)
}
```

### <span id="ConcurrentMap_Set">ConcurrentMap_Set</span>

<p>Set the value for a key.</p>

<b>Signature:</b>

```go
func (cm *ConcurrentMap[K, V]) Set(key K, value V)
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    cm := maputil.NewConcurrentMap[string, int](100)

    var wg1 sync.WaitGroup
    wg1.Add(5)

    for i := 0; i < 5; i++ {
        go func(n int) {
            cm.Set(fmt.Sprintf("%d", n), n)
            wg1.Done()
        }(i)
    }
    wg1.Wait()


    var wg2 sync.WaitGroup
	wg2.Add(5)
	for j := 0; j < 5; j++ {
		go func(n int) {
			val, ok := cm.Get(fmt.Sprintf("%d", n))
			fmt.Println(val, ok)
			wg2.Done()
		}(j)
	}
	wg2.Wait()

    // output: (order may change)
    // 1 true
    // 3 true
    // 2 true
    // 0 true
    // 4 true
}
```

### <span id="ConcurrentMap_Get">ConcurrentMap_Get</span>

<p>Get the value stored in the map for a key, or nil if no.</p>

<b>Signature:</b>

```go
func (cm *ConcurrentMap[K, V]) Get(key K) (V, bool)
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    cm := maputil.NewConcurrentMap[string, int](100)

    var wg1 sync.WaitGroup
    wg1.Add(5)

    for i := 0; i < 5; i++ {
        go func(n int) {
            cm.Set(fmt.Sprintf("%d", n), n)
            wg1.Done()
        }(i)
    }
    wg1.Wait()


    var wg2 sync.WaitGroup
	wg2.Add(5)
	for j := 0; j < 5; j++ {
		go func(n int) {
			val, ok := cm.Get(fmt.Sprintf("%d", n))
			fmt.Println(val, ok)
			wg2.Done()
		}(j)
	}
	wg2.Wait()

    // output: (order may change)
    // 1 true
    // 3 true
    // 2 true
    // 0 true
    // 4 true
}
```

### <span id="ConcurrentMap_GetOrSet">ConcurrentMap_GetOrSet</span>

<p>Returns the existing value for the key if present. Otherwise, it sets and returns the given value.</p>

<b>Signature:</b>

```go
func (cm *ConcurrentMap[K, V]) GetOrSet(key K, value V) (actual V, ok bool)
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    cm := maputil.NewConcurrentMap[string, int](100)

    var wg sync.WaitGroup
    wg.Add(5)

    for i := 0; i < 5; i++ {
        go func(n int) {
            val, ok := cm.GetOrSet(fmt.Sprintf("%d", n), n)
            fmt.Println(val, ok)
            wg.Done()
        }(i)
    }
    wg.Wait()

    // output: (order may change)
    // 1 false
    // 3 false
    // 2 false
    // 0 false
    // 4 false
}
```

### <span id="ConcurrentMap_Delete">ConcurrentMap_Delete</span>

<p>Delete the value for a key.</p>

<b>Signature:</b>

```go
func (cm *ConcurrentMap[K, V]) Delete(key K)
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    cm := maputil.NewConcurrentMap[string, int](100)

    var wg1 sync.WaitGroup
    wg1.Add(5)

    for i := 0; i < 5; i++ {
        go func(n int) {
            cm.Set(fmt.Sprintf("%d", n), n)
            wg1.Done()
        }(i)
    }
    wg1.Wait()

    var wg2 sync.WaitGroup
	wg2.Add(5)
    for j := 0; j < 5; j++ {
        go func(n int) {
            cm.Delete(fmt.Sprintf("%d", n))
            wg2.Done()
        }(j)
    }

    wg2.Wait()
}
```


### <span id="ConcurrentMap_GetAndDelete">ConcurrentMap_GetAndDelete</span>

<p>Returns the existing value for the key if present and then delete the value for the key. Otherwise, do nothing, just return false.</p>

<b>Signature:</b>

```go
func (cm *ConcurrentMap[K, V]) GetAndDelete(key K) (actual V, ok bool)
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    cm := maputil.NewConcurrentMap[string, int](100)

    var wg1 sync.WaitGroup
    wg1.Add(5)

    for i := 0; i < 5; i++ {
        go func(n int) {
            cm.Set(fmt.Sprintf("%d", n), n)
            wg1.Done()
        }(i)
    }
    wg1.Wait()

    var wg2 sync.WaitGroup
	wg2.Add(5)
    for j := 0; j < 5; j++ {
        go func(n int) {
            val, ok := cm.GetAndDelete(fmt.Sprintf("%d", n))
            fmt.Println(val, ok) //n, true

            _, ok = cm.Get(fmt.Sprintf("%d", n))
            fmt.Println(val, ok) //false
            
            wg2.Done()
        }(j)
    }

    wg2.Wait()
}
```


### <span id="ConcurrentMap_Has">ConcurrentMap_Has</span>

<p>Checks if map has the value for a key.</p>

<b>Signature:</b>

```go
func (cm *ConcurrentMap[K, V]) Has(key K) bool
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    cm := maputil.NewConcurrentMap[string, int](100)

    var wg1 sync.WaitGroup
    wg1.Add(5)

    for i := 0; i < 5; i++ {
        go func(n int) {
            cm.Set(fmt.Sprintf("%d", n), n)
            wg1.Done()
        }(i)
    }
    wg1.Wait()

    var wg2 sync.WaitGroup
	wg2.Add(5)
    for j := 0; j < 5; j++ {
        go func(n int) {
            ok := cm.Has(fmt.Sprintf("%d", n))
            fmt.Println(ok) // true
            wg2.Done()
        }(j)
    }
    wg2.Wait()
}
```


### <span id="ConcurrentMap_Range">ConcurrentMap_Range</span>

<p>Calls iterator sequentially for each key and value present in each of the shards in the map. If iterator returns false, range stops the iteration.</p>

<b>Signature:</b>

```go
func (cm *ConcurrentMap[K, V]) Range(iterator func(key K, value V) bool)
```

<b>Example:</b>

```go
package main

import (
    "fmt"
    "github.com/duke-git/lancet/v2/maputil"
)

func main() {
    cm := maputil.NewConcurrentMap[string, int](100)

    var wg1 sync.WaitGroup
    wg1.Add(5)

    for i := 0; i < 5; i++ {
        go func(n int) {
            cm.Set(fmt.Sprintf("%d", n), n)
            wg1.Done()
        }(i)
    }
    wg1.Wait()

    
    cm.Range(func(key string, value int) bool {
        fmt.Println(value)
        return true
    })
}
```