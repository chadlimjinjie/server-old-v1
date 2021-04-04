import os
import discord
import requests
from discord.ext import commands


def MULTILINE(text):
  return f'```{text}```'

def BOLD(text):
  return f'**{text}**'

def STRIKETHROUGH(text):
  return f'~~{text}~~'

# https://discord.com/api/oauth2/authorize?client_id=788295960870125608&permissions=0&scope=bot

client = commands.Bot(command_prefix='.')

@client.event
async def on_ready():
  print('We have logged in as {0.user}'.format(client))
  await client.change_presence(activity=discord.Activity(type=discord.ActivityType.listening, name='.'))
  client.load_extension('BotInfo')
  client.load_extension('CRO_CHAIN')

@client.event
async def on_command_error(ctx, error):
  if isinstance(error, commands.CommandNotFound):
    description = f'{MULTILINE(error)}'
    embed = discord.Embed(title='Command not found', description=description, colour=discord.Colour.red())
    await ctx.send(embed=embed)

@client.command()
async def test(ctx):
  await ctx.send('Hello!')


client.run(os.getenv('TOKEN'), bot=True, reconnect=True)
