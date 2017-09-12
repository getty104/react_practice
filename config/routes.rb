Rails.application.routes.draw do
  resources :diaries
  root 'welcome#top'
  get 'diaries/*path' => 'welcome#top'
  namespace :api do
    end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
