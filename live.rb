require 'sinatra'
require 'redis'

get '/' do
  File.read(File.join('public', 'live.html'))
end

def redis_connect
  @redis = Redis.new
end
