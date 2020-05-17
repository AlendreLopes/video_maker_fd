// Call the functions that we'll use in program
const readLine = require('readline-sync')

function start(){
	const content = {}
	content.searchTerm = askAndReturnSearchTerm()
	content.prefixTerm = askAndReturnPrefixTerm()
	function askAndReturnSearchTerm(){
		return readLine.question('Ask to Wikipedia search term: ')
	}
	function askAndReturnPrefixTerm(){
		const prefixTermIndex    = ['Who is','Who was','What is','The history of']
		const prefixTermSelect   = readLine.keyInSelect(prefixTermIndex,'Chose one option:')
		const prefixTermSelected = prefixTermIndex[prefixTermSelect]
		return prefixTermSelected
	}
	console.log(content)
}

start()