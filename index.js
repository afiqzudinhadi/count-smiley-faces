function countSmileys(arr) {
	const smileyPattern = /^[:;][-~]?[)D]$/;

	if (arr.length === 0) {
		return 0;
	}

	return arr.filter((face) => smileyPattern.test(face)).length;
}

// Test cases
console.log(countSmileys([":)", ";(", ";}", ":-D"])); // Output: 2
console.log(countSmileys([";D", ":-(", ":-)", ";~)"])); // Output: 3
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"])); // Output: 1
console.log(countSmileys([])); // Output: 0
