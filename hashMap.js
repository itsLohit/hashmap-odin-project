import { LinkedList } from "./linkedList.js";

import (LinkedList)

class HashMap {
    constructor(capacity = 16, loadFactor = 0.75) {
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.buckets = new Array(capacity);
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for(let i = 0; i < key.length; i++){
            hashCode = primeNumber * hashCode + key.charCodeAt(i) % this.capacity;
        }

        return hashCode;
    }

    set(key, value) {
        let index = this.hash(key);

        if(!this.buckets[index]){
            this.buckets[index] = new LinkedList();
        }

        if(!this.has(key)) {
            this.buckets[index].append(key, value);
        }

        else {
            let currentNode = this.buckets[index].head;
            let listIndex = this.buckets[index].find(key);
            let count = 0;
            while(currentNode) {
                if(count === listIndex){
                    currentNode.value = value;
                }
                count++;
                currentNode = currentNode.nextNode;
            }
        }

        if (this.capacity * this.loadFactor < this.length()) {
            this.grow();
        }
    }

    get(key) {

    }

    has(key) {

    }

    remove(key) {

    }

    length() {

    }

    clear() {

    }

    keys() {

    }

    values() {

    }

    entries() {
        
    }

    grow() {
        
    }
}