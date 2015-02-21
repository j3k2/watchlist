Rails.application.routes.draw do

  root "static_page#index"
  
  resources :users
  resource :session
  
  
  namespace :api, defaults: {format: :json} do
    resources :users
    resources :listings
    resources :lists
    resources :ratings
  end
  
end
