# frozen_string_literal: true

class V1::TasksController < ApplicationController
  protect_from_forgery
  before_action :authenticate_user!

  def index
    tasks = Task.all
    render json: {
      data: tasks
    }, status: :ok
  end

  def new
    task = Task.new(task_params)
    if task.save
      render json: {
        message: "task successfuly created",
        data: Task.all.reverse
      },
             status: :ok
    else
      render json: {
        message: "An error occured when creating task"
      },
             status: :bad_request
    end
  end

  def edit; end

  def show; end

  def delete; end

  private
    def task_params
      params.require(:task).permit(:title, :description)
    end
end
