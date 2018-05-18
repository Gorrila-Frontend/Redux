export const ping = store => next => action => {
    console.log(`ТИП СОБЫТИЯ: ${action.type}, дополнительные данные событя:
        ${action.payload}
    `);


    return next(action)
}
