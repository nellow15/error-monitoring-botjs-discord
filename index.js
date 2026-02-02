const ShardoX_ErrorRoom = 'YOUR_CHANNEL_ID';

function ShardoXLog(err) {
    if (!client) return;

    var shardoXCh = client.channels.cache.get(ShardoX_ErrorRoom);
    if (!shardoXCh) return;

    var shardoXMsg = err;
    if (err && err.stack) shardoXMsg = err.stack;

    const shardoXEmbed = new EmbedBuilder()
        .setTitle('script error')
        .setDescription('```' + shardoXMsg + '```')
        .setColor(16711680);

    shardoXCh.send({ embeds: [shardoXEmbed] });
}

process.on('uncaughtException', function (shardoXErr) {
    console.log(shardoXErr);
    ShardoXLog(shardoXErr);
});

process.on('unhandledRejection', function (shardoXErr) {
    console.log(shardoXErr);
    ShardoXLog(shardoXErr);
});
