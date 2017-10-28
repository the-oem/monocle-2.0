import Node from './Node.js';

export default class Trie {
  constructor() {
    this.root = new Node();
    this.wordCount = 0;
  }
  insert(word) {
    if (!this.root) {
      this.root = new Node();
    }

    const letters = [...word.toLowerCase()];
    let currentNode = this.root;

    letters.forEach(letter => {
      if (!currentNode.children[letter]) {
        currentNode.children[letter] = new Node(letter);
      }
      currentNode = currentNode.children[letter];
    });
    if (!currentNode.isWord) {
      currentNode.isWord = true;
      this.wordCount++;
    }
  }

  count() {
    return this.wordCount;
  }

  suggest(input) {
    const inputArray = [...input.toLowerCase()];
    let currentNode = this.root;
    const suggestions = [];

    for (let i = 0; i < inputArray.length; i++) {
      currentNode = currentNode.children[inputArray[i]];
    }

    const traverseTheTrie = (input, currentNode) => {
      const keys = Object.keys(currentNode.children);

      for (let k = 0; k < keys.length; k++) {
        const child = currentNode.children[keys[k]];
        const newString = input + child.letter;

        if (child.isWord) {
          suggestions.push({ value: newString, frequency: child.frequency, lastTouched: child.lastTouched });
        }
        traverseTheTrie(newString, child);
      }
    };

    if (currentNode && currentNode.isWord) {
      suggestions.push({ value: input, frequency: currentNode.frequency, lastTouched: currentNode.lastTouched });
    }
    if (currentNode) {
      traverseTheTrie(input, currentNode);
    }
    suggestions.sort((a, b) => {
      return b.frequency - a.frequency || b.lastTouched - a.lastTouched;
    });
    return suggestions.map(obj => {
      return obj.value;
    });
  }

  select(word) {
    const wordsArray = [...word];
    let currentNode = this.root;

    for (let i = 0; i < wordsArray.length; i++) {
      currentNode = currentNode.children[wordsArray[i]];
    }
    currentNode.frequency++;
    currentNode.lastTouched = Date.now();
  }

  populate(obj) {
    const objArray = obj.data;
    objArray.forEach(word => {
      this.insert(word);
    });
  }

}
