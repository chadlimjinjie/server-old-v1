import os
import discord
import requests
from discord.ext import commands
from keep_alive import keep_alive

# https://discord.com/api/oauth2/authorize?client_id=788295960870125608&permissions=0&scope=bot

client = commands.Bot(command_prefix='.')

@client.event
async def on_ready():
  print('We have logged in as {0.user}'.format(client))
  await client.change_presence(activity=discord.Activity(type=discord.ActivityType.listening, name='.'))
  client.load_extension('CRO_CHAIN')

@client.command()
async def test(ctx):
  await ctx.send('Hello!')

keep_alive()
client.run(os.getenv('TOKEN'), bot=True, reconnect=True)
