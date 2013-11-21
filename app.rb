require 'sinatra'
require 'redis'

class App < Sinatra::Base
  # @@redis = Redis.new
  ENV["REDISTOGO_URL"] = 'redis://redistogo:e8b1d75b327d80eb16903a8594d83864@tarpon.redistogo.com:10162/'
  uri = URI.parse(ENV["REDISTOGO_URL"])
  @@redis = Redis.new(host: uri.host, port: uri.port, password: uri.password)

  get '/' do
    File.read(File.join('public', 'live.html'))
  end

  get '/api/redis_get_colors' do
    # puts "get live_colors: #{@@redis.get('live_colors')}"
    @@redis.get('live_colors')
  end

  post '/api/redis_set_colors' do
    # puts params
    @@redis.set('live_colors', params["colors"])
    # puts "set live_colors: #{@@redis.get('live_colors')}"
  end

  # extend Sinatra's .run method
  def self.run!
    super
  end

  # alternatively, run rackup -p 4567 in terminal
  run! if app_file == $0
end
