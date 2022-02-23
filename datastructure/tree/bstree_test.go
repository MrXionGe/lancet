package datastructure

import (
	"testing"

	"github.com/duke-git/lancet/internal"
)

type intComparator struct{}

func (c *intComparator) Compare(v1, v2 any) int {
	val1, _ := v1.(int)
	val2, _ := v2.(int)

	if val1 < val2 {
		return -1
	} else if val1 > val2 {
		return 1
	}
	return 0
}

func TestBSTree_Insert(t *testing.T) {
	bstree := NewBSTree(6)

	comparator := &intComparator{}
	bstree.Insert(7, comparator)
	bstree.Insert(5, comparator)
	bstree.Insert(2, comparator)
	bstree.Insert(4, comparator)

	bstree.Print()
}

func TestBSTree_PreOrderTraverse(t *testing.T) {
	assert := internal.NewAssert(t, "TestBSTree_PreOrderTraverse")

	bstree := NewBSTree(6)

	comparator := &intComparator{}
	bstree.Insert(7, comparator)
	bstree.Insert(5, comparator)
	bstree.Insert(2, comparator)
	bstree.Insert(4, comparator)

	acturl := bstree.PreOrderTraverse()
	t.Log(acturl)
	assert.Equal([]int{6, 5, 2, 4, 7}, acturl)
}

func TestBSTree_PostOrderTraverse(t *testing.T) {
	assert := internal.NewAssert(t, "TestBSTree_PostOrderTraverse")

	bstree := NewBSTree(6)

	comparator := &intComparator{}
	bstree.Insert(7, comparator)
	bstree.Insert(5, comparator)
	bstree.Insert(2, comparator)
	bstree.Insert(4, comparator)

	acturl := bstree.PostOrderTraverse()
	t.Log(acturl)
	assert.Equal([]int{5, 2, 4, 7, 6}, acturl)
}

func TestBSTree_InOrderTraverse(t *testing.T) {
	assert := internal.NewAssert(t, "TestBSTree_InOrderTraverse")

	bstree := NewBSTree(6)

	comparator := &intComparator{}
	bstree.Insert(7, comparator)
	bstree.Insert(5, comparator)
	bstree.Insert(2, comparator)
	bstree.Insert(4, comparator)

	acturl := bstree.InOrderTraverse()
	t.Log(acturl)
	assert.Equal([]int{2, 4, 5, 6, 7}, acturl)
}
