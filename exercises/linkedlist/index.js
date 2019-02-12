// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, node = null) {
        this.data = data;
        this.next = node;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let head = this.head
        while (head) {
            counter += 1;
            head = head.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let head = this.head;
        if (head && head.next) {
            while (head.next) {
                head = head.next
            }
        }
        return head;
    }

    clear() {
        if (this.head) {
            this.head = null;
        }
    }

    removeFirst() {
        if(!this.head) {
            return;
        }
        this.head = this.head.next; 
    }

    removeLast() {

    }

    insertLast(data) {
        const last = this.getLast();
        if (!last) {
            this.head = new Node(data);
        } else {
            last.next = new Node(data);
        }
    }

    getAt(num) {
        let counter = 0;
        let head = this.head;
        while (head && counter !== num) {
            counter += 1;
            head = head.next;
        }
        
        return head;
    }


}

module.exports = { Node, LinkedList };
