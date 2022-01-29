CURRENTDIR=$(pwd)
cd "${CURRENTDIR}"/server && npm install && npm start &> "${CURRENTDIR}"/server.log & cd "${CURRENTDIR}"/client && npm install && npm start &&> "${CURRENTDIR}"/client.log