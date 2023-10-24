/**
 * Contains the miscellaneous route handlers.
 * @author Phumzile Vuma <https://github.com/Phumzi1e>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
