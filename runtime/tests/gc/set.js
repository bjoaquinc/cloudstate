{
// Test that the garbage collector works correctly with Sets
const root = {
    nested: {
    value: new Set([1, 2, 3, 4]),
    value2: new Set([5, 6, 7, 8, 9]),
    },
};

setRoot("test-root", root);
commit();
}

// END_FILE

{
    const root = getRoot("test-root");
    if (!root) {
        throw new Error("root should exist");
    }
    if (!root.nested) {
        throw new Error("root.nested should exist");
    }
    if (!root.nested.value) {
        throw new Error("root.nested.value should exist");
    }
    if (!root.nested.value2) {
        throw new Error("root.nested.value2 should exist");
    }
    if (root.nested.value.size !== 4) {
        throw new Error("root.nested.value should have size 4");
    }
    if (root.nested.value2.size !== 5) {
        throw new Error("root.nested.value2 should have size 5");
    }

    commit();
    }

    // END_FILE

    {
    // Delete the nested.value Set while keeping nested.value2,
    // so we can test that the garbage collector works correctly.
    const root = getRoot("test-root");
    if (!root) {
        throw new Error("root should exist");
    }

    delete root.nested.value;

    commit();
}
  