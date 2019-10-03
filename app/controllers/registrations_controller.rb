# frozen_string_literal: true

class RegistrationsController < Devise::RegistrationsController
  respond_to :json
  skip_before_action :verify_authenticity_token, only: :create

  def create
    build_resource(sign_up_params)

    resource.save
    render_resource(resource)
  end

  private

  # Notice the name of the method
  def sign_up_params
    params.require(:user).permit(:name, :email, :password)
  end
end
