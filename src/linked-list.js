const Node = require('./node');

class LinkedList {
    length;
    nodes;
    _head;
    _tail;

    constructor() {
        this.length = 0;
        this.nodes = [];
        this._head = null;
        this._tail = null;
    }

    append(data) {
        if (this._head === null) {
            let newNode = new Node(data);

            this.length++;

            this._head = newNode;
            this._tail = newNode;

        } else {
            let newNode = new Node(data, this._tail);

            this.length++;

            this._tail.next = newNode;
            this._tail = newNode;
        }
        return this;
    }

    head() {
        if (this.length)
            return this._head.data;
        else return null;
    }

    tail() {
        if (this.length)
            return this._tail.data;
        else return null;
    }

    at(index) {

        for (let cur = this._head, i = 0; cur != null; cur = cur.next, i++) {
            // console.log(cur);
            if (index === i) return cur.data;

        }
    }

    insertAt(index, data) {
        let newNode = new Node(data);

        for (let cur = this._head, i = 0; cur != null; cur = cur.next, i++) {
            // console.log(cur);
            if (index === i) {
                cur.prev.next = newNode;
                cur.prev = newNode;

                newNode.prev = cur.prev;
                newNode.next = cur;

                this.length++;
                return this;
            }
        }
        return this;
    }

    isEmpty() {
        if (this.length)
            return this.length === 0;
        else return true;
    }

    clear() {
        this.length = 0;
        this.nodes = [];
        this._head = null;
        this._tail = null;
        return this;
    }

    deleteAt(index) {
        for (let cur = this._head, i = 0; cur != null; cur = cur.next, i++) {
            // console.log(cur);
            if (index === i) {
                if (cur.prev && cur.next) {
                    cur.prev.next = cur.next;
                    cur.next.prev = cur.prev;
                } else if (cur.prev){
                    cur.prev.next = null;
                    this._tail = cur.prev;
                } else if (cur.next){
                    cur.next.prev = null;
                    this._head = cur.next;
                } else {
                    this._head = null;
                    this._tail = null;
                }

                cur = null;

                this.length--;
                return this;
            }
        }
        return this;
    }

    reverse() {
        for (let cur = this._head, i = 0; cur != null; i++) {
            // console.log(cur);

            let temp1 = cur.next;
            let temp2 = cur.prev;
            cur.prev = cur.next;
            cur.next = temp2;

            if(i === 0)
                this._tail = cur;
            else if (i === this.length-1)
                this._head = cur;

            cur = temp1;
        }
        return this;
    }

    indexOf(data) {
        for (let cur = this._head, i = 0; cur != null; cur = cur.next, i++) {
            // console.log(cur);
            if (cur.data === data) {
                return i;
            }
        }
        return -1;
    }
}

module.exports = LinkedList;
