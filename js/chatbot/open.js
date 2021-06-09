const chatModal = $('.chat-modal');
const chatServices = $('.chat-services');

const showChat = $('.show-chat');
const closeChat = $('.close-chat');

function chatbot_open()
{
    showChat.on('click', function ()
    {
        if (Notification && Notification.permission !== "granted") {
            console.log('ok')
            Notification.requestPermission();
        }
        console.log(Notification.permission)
        new Notification("Coucou !");
        chatModal.addClass('show')
        showChat.addClass('hidden')
        setTimeout(function()
        {
            chatServices.addClass('expand')
        }, 500);
    });
    closeChat.on('click',function()
    {
        setTimeout(function()
        {
            showChat.removeClass('hidden')
        }, 820);
        chatServices.removeClass('expand')
        setTimeout(function()
        {
            chatModal.removeClass('show')
        }, 500);
    });
}
$(document).ready(function()
{
    chatbot_open();
});