# frozen_string_literal: true

class ApplicationController < ActionController::Base
  def render_resource(resource)
    if resource.errors.empty?
      render json: current_user
    else
      validation_error(resource)
    end
  end

  def validation_error(resource)
    render json: {
      errors: [
        {
          status: "400",
          title: "Bad Request",
          detail: resource.errors,
          code: "100"
        }
      ]
    }, status: :bad_request
  end
end
