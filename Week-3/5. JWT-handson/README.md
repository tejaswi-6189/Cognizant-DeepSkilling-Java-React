
# JWT Authentication Handson

## Technologies
- Java 11
- Spring Boot 2.7.18
- Spring Security
- JWT (jjwt 0.9.1)

## Steps to Run

1. Clone the repository.
2. Open in IntelliJ IDEA.
3. Run `SpringLearnApplication`.
4. Open:
   http://localhost:8090/authenticate
5. Login:
   - Username: user
   - Password: pwd
6. Copy the generated JWT token.
7. Test the protected endpoint:

```bash
curl -H "Authorization: Bearer <TOKEN>" http://localhost:8090/countries
