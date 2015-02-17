json.(@user, :id, :username)
json.lists do
	json.array! @user.lists do |list|
		json.id list.id
		json.user_id list.user_id
		json.category list.category
		json.shows list.shows
	end
end