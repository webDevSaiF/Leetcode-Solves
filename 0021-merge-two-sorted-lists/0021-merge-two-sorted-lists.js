const list1 = [1, 2, 4];
const list2 = [1, 3, 4];
const mergeTwoLists = function (l1, l2) {
  // If either list is empty, return the other list's node
  if (l1 == null) return l2;
  if (l2 == null) return l1;

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

mergeTwoLists(list1, list2);