require 'sinatra'
require 'redis'

class App < Sinatra::Base
  @@redis = Redis.new

  get '/' do
    File.read(File.join('public', 'live.html'))
  end

  get '/api/redis_get_colors' do
    redis_get_colors
  end

  post '/api/redis_set_colors' do
    redis_set_colors
  end

  # extend Sinatra's .run method
  def self.run!
    super
  end

  def redis_set_colors
    @@redis.set('live_colors', 'test')
  end

  def redis_get_colors
    @@redis.get('live_colors')
  end

  # alternatively, run rackup -p 4567 in terminal
  run! if app_file == $0
end
