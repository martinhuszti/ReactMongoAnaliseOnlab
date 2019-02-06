FROM openjdk:8-jdk-alpine
LABEL maintainer="martinhuszti@gmail.com"
VOLUME /tmp
ARG JAR_FILE=target/analise.jar
ADD target/analise.jar analise.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "analise.jar"]