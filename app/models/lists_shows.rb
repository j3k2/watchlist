class ListsShows < ActiveRecord::Base
  belongs_to :list
  belongs_to :show
end
