# collection of multiple lights which contains multiple colors
Scene
  has_many :lights

  decimal :duration

# so we can re-use a light we've created in another scene.
# associates a light to a scene 1 or more times.  Contians position.
Light_Scene
  integer :position

# sequence that is associated with multiple colors which fading in and out at different durations
# can be reused through a new entry in join table Light_Scene
Light
  belong_to :collection
  has_many  :color, :through => :light_colors

# so we can re-use colors in multiple lights
# associates a color to a light, and also provides duration and fade
Light_Color join table
  decimal :duration
  boolean :fade

# color information
Color
  belong_to :light, :through => :light_colors

  string  :rgb
