# frozen_string_literal: true

Rails.application.routes.draw do
  devise_scope :user do
    get "/login", to: "sessions#login"
    get "/signup", to: "registrations#custom_signup"
  end
  devise_for :users,
             path: "",
             path_names: {
               sign_in: "login",
               sign_out: "logout",
               registration: "signup"
             },
             controllers: {
               sessions: "sessions",
               registrations: "registrations"
             }
  root "home#index"
  namespace :v1, defaults: { format: "json" } do
    get "things", to: "things#index"
    post "things", to: "things#show"
    get "tasks", to: "tasks#index"
    post "task", to: "tasks#new"
  end
  # Forward all requests to StaticController#index but requests
  # must be non-Ajax (!req.xhr?) and HTML Mime type (req.format.html?).
  # This does not include the root ("/") path.
  get "*page", to: "single_page#index", constraints: lambda { |req|
    !req.xhr? && req.format.html?
  }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
