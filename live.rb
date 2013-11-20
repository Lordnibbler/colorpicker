require 'sinatra'
require 'redis'

get '/' do
  # 'Hello world!'
  erb :live
end

def redis_connect
  @redis = Redis.new
end
