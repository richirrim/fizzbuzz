class FizzBuzzService {
  static applyValidationInExplorer (explorer) {
    if (explorer.score % 3 === 0 && explorer.score % 5 === 0) {
      explorer.trick = 'FIZZBUZZ'
    } else if (explorer.score % 3 === 0) {
      explorer.trick = 'FIZZ'
    } else if (explorer.score % 5 === 0) {
      explorer.trick = 'BUZZ'
    } else {
      explorer.trick = explorer.score
    }

    return explorer
  }

  static applyValidationInNumber (number) {
    if (number % 3 === 0 && number % 5 === 0) return 'FIZZBUZZ'
    if (number % 3 === 0) return 'FIZZ'
    if (number % 5 === 0) return 'BUZZ'

    return number
  }
}

module.exports = FizzBuzzService
