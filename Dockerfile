# Stage 1: Build the Spring Boot application
# Uses a JDK image from Eclipse Temurin for compilation.
FROM eclipse-temurin:17-jdk

WORKDIR /app

COPY pom.xml .
COPY src ./src

RUN chmod +x mvnw || true
RUN ./mvnw package -DskipTests || mvn package -DskipTests

EXPOSE 8080

CMD ["java","-jar","target/*.jar"]



FROM eclipse-temurin:17-jre-focal

# Set the working directory inside the container for the runtime stage.
WORKDIR /app

# Copy the executable JAR from the builder stage to the final image.
# The JAR is copied from `/app/build/libs/Billing-0.0.1-SNAPSHOT.jar` in the builder stage
# and renamed to `app.jar` in the current stage for simplicity.
COPY --from=builder /app/build/libs/Billing-0.0.1-SNAPSHOT.jar app.jar

# Expose the port on which your Spring Boot application will listen.
# Based on your application.properties, this is 9090.
EXPOSE 9090

# Define the command to run your application when the container starts.
# `java -jar app.jar` executes the Spring Boot application.
# Spring Boot automatically picks up the `server.port` from application.properties
# and will also respect the `PORT` environment variable set by Render if it's different.
ENTRYPOINT ["java", "-jar", "app.jar"]
