FROM amazoncorretto:17
COPY target/*.jar testapp.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "testapp.jar"]