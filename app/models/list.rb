class List < ActiveRecord::Base
  belongs_to :user
  
  has_many :listings
  has_many :shows, through: :listings
end
