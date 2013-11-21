require 'sinatra'
require 'redis'

class App < Sinatra::Base
  @@redis = Redis.new

  get '/' do
    File.read(File.join('public', 'live.html'))
  end

  get '/api/redis_get_colors' do
    @@redis.get('live_colors')
    puts @@redis.get('live_colors')
  end

  post '/api/redis_set_colors' do
    puts params
    @@redis.set('live_colors', params["colors"])
    puts "key live_colors now set as #{@@redis.get('live_colors')}"
  end

  # extend Sinatra's .run method
  def self.run!
    super
  end

  # alternatively, run rackup -p 4567 in terminal
  run! if app_file == $0
end
