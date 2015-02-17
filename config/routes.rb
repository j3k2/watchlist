Rails.application.routes.draw do

  devise_for :users
  root "static_page#index"
  
  namespace :api, defaults: {format: :json} do
    resources :users
    resources :shows
  end
  
end
