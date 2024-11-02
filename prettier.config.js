export default {
	"arrowParens": "avoid",
	"bracketSpacing": true,
	"htmlWhitespaceSensitivity": "css",
	"insertPragma": false,
	"jsxBracketSameLine": false,
	"jsxSingleQuote": true,
	"printWidth": 80,
	"proseWrap": "always",
	"quoteProps": "as-needed",
	"requirePragma": false,
	"semi": false,
	"singleQuote": true,
	"tabWidth": 2,
	"endOfLine": "lf",
	"useTabs": true,
	"trailingComma": "all",
	"plugins": ["prettier-plugin-css-order"],
	"prettier-plugin-css-order": {
		"syntax": "postcss-scss",
		"order": "concentric-css"
	}
}
