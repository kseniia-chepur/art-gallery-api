## Gallery App API 

This API provides basic CRUD operations for managing artwork records in the Gallery App Management System

### Endpoints:
1. GET /artworks
 - Retrieve a list of artwork entries.
- Support sorting (by price) and filtering (by artist or type).
2. GET /artworks/{id}
- Retrieve details of a specific artwork by its ID.
3. POST /artworks
- Add a new artwork entry with the fields validation.
4. DELETE /artworks/{id}
- Remove a specific artwork entry by ID.
5. PUT /artworks/{id}
- Update an existing artwork entry.

### Technologies used:
-Node.js -Express.js -TypeScript -MongoDB & mongoose -Joi -cors -nodemon -dotenv

