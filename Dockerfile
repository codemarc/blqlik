FROM microsoft/dotnet:latest
MAINTAINER Marc J. Greenberg <marc@buildinglink.com>

COPY . /app
WORKDIR /app

RUN ["dotnet", "restore"]
RUN ["dotnet", "build"]

EXPOSE 5000/tcp
CMD ["dotnet", "run", "--server.urls", "http://*:5000"]