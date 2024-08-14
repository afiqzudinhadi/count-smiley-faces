## Question

[Sloth Bytes | 2024-07-06](https://slothbytes.beehiiv.com/p/oop-pillar-2-encapsulation-dummies?utm_source=slothbytes.beehiiv.com&utm_medium=newsletter&utm_campaign=oop-pillar-2-encapsulation-for-dummies&_bhlid=61405b368a7a76397364e5c2a60f4b0412ffe872)

```
Count the Smiley Faces :)
Create a function that takes an array of strings and return the number of smiley faces contained within it. These are the components that make up a valid smiley:

- A smiley has eyes. Eyes can be : or ;
- A smiley has a nose but it doesn't have to. A nose can be - or ~
- A smiley has a mouth which can be ) or D

No other characters are allowed except for those mentioned above.

Examples
countSmileys([":)", ";(", ";}", ":-D"])
output = 2 # the two smileys are [":)" and ":-D"

countSmileys([";D", ":-(", ":-)", ";~)"])
output = 3 #The three smileys are ";D", ":-)", and ";~)"

countSmileys([";]", ":[", ";*", ":$", ";-D"])
output = 1 #The smiley is ";-D"

Notes
- You will always be given an array as input.
- An empty array should return 0.
- The order of each facial element will always be the same.
- Noses are optional (e.g. :) and :-) are both valid).
```
