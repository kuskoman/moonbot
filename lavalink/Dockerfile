FROM openjdk:12-alpine3.9

WORKDIR /opt/Lavalink

COPY Lavalink.jar Lavalink.jar
COPY application.yml application.yml

ENTRYPOINT ["java", "-Xmx4G", "-jar", "Lavalink.jar"]