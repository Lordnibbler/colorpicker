require 'sinatra'
require 'redis'

class App < Sinatra::Base
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
    self.redis_connect
    super
  end

  def redis_connect
    @redis = Redis.new
    puts "redis connected successfully" unless @redis.nil?
  end

  def redis_set_colors
    @redis.set('live_colors', 'test')
  end

  def redis_get_colors
    @redis.get('live_colors')
  end

  # alternatively, run rackup -p 4567 in terminal
  run! if app_file == $0
end
