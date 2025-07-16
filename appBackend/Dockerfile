# Use a JDK 17 base image
FROM eclipse-temurin:17-jdk-alpine

# Set working directory
WORKDIR /app

# Copy the jar file (adjust this name if your JAR name changes)
COPY target/appBackend-0.0.1-SNAPSHOT.jar app.jar

# Expose port (change if your app uses a different port)
EXPOSE 5200

# Run the jar
ENTRYPOINT ["java", "-jar", "app.jar"]