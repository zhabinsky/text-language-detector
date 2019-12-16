# Text Language Detector

This package exists to give you language detection with the simplest API possible.  
Just one function as export.  
  
Integrate language detection in your system with just one dependency.

## Install
```
npm i --save text-language-detector
```

## Use
```
const detect = require("text-language-detector")

detect (`Rikssvenska, eller standardsvenska`).then (console.log)
```
## Output
```
{
	"match_score":4,
	"match_language": "swe",
	"match_language_data":{
		"code3": "swe",
		"code2": "sv",
		"names": "Swedish",
		"scope": "Individual",
		"type": "Living",
		"name_native": "svenska",
		"names_other": ""
	},
	"match_languages_count": 2,
	"match_languages":[
		{
			"lang": "swe",
			"matchScore":4,
			"data":{
				"code3": "swe",
				"code2": "sv",
				"names": "Swedish",
				"scope": "Individual",
				"type": "Living",
				"name_native": "svenska",
				"names_other": ""
			}
		},
		{
			"lang": "nob",
			"matchScore":1,
			"data":{
				"code3": "nob",
				"code2": "nb",
				"names": "Bokmål, Norwegian; Norwegian Bokmål",
				"scope": "Individual",
				"type": "Living",
				"name_native": "bokmål",
				"names_other": "Bokmål"
			}
		}
	]
}

```

# Test
```
$ node test.js
```
```
Rikssvenska, eller standa... Language: swe
В России проживает более ... Language: rus
Fonetiškai ir morfologišk... Language: lit
Genealogisen eli kielen a... Language: fin
English is a West Germani... Language: eng
Elkeen het die reg tot op... Language: afr
```