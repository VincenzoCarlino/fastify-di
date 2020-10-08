export const healthcheck = async (server, options) => {
    server.get('/', (request, reply) => {
        server.userService(server).login('v@v.it', 'Prova.123')
            .then((users) => {
                reply.code(200).send(users)
            })
            .catch(e => {
                reply.code(400).send(e)
            })
    })
}