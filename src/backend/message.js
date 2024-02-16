import wixData from 'wix-data';

export const readAllMessages = async () => {
    return wixData.query("messages").find()
}
