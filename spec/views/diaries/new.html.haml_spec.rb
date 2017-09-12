require 'rails_helper'

RSpec.describe "diaries/new", type: :view do
  before(:each) do
    assign(:diary, Diary.new(
      :title => "MyString",
      :body => "MyText"
    ))
  end

  it "renders new diary form" do
    render

    assert_select "form[action=?][method=?]", diaries_path, "post" do

      assert_select "input[name=?]", "diary[title]"

      assert_select "textarea[name=?]", "diary[body]"
    end
  end
end
