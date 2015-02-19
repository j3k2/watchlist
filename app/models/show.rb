class Show < ActiveRecord::Base
  has_many :listings
  has_many :ratings
end
