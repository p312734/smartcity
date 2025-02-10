def on_logo_pressed():
    basic.show_string("L")
    OLED.write_string_new_line(
        RTC_DS1307.get_time(RTC_DS1307.TimeType.YEAR) + "-" 
        + RTC_DS1307.get_time(RTC_DS1307.TimeType.MONTH) + "-" 
        + RTC_DS1307.get_time(RTC_DS1307.TimeType.DAY) + "-" 
        + " " 
        + RTC_DS1307.get_time(RTC_DS1307.TimeType.HOUR) + ":" 
        + RTC_DS1307.get_time(RTC_DS1307.TimeType.MINUTE) + ":" 
        + RTC_DS1307.get_time(RTC_DS1307.TimeType.MINUTE) + ":" 
        + RTC_DS1307.get_time(RTC_DS1307.TimeType.SECOND))

input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_button_pressed_a():
    basic.show_string("A")
    OLED.write_string_new_line("Knopf A")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_string("B")
    OLED.write_string_new_line("Knopf B")
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_button_pressed_ab():
    OLED.clear()
    RTC_DS1307.set_time(RTC_DS1307.TimeType.YEAR, 2025)
    RTC_DS1307.set_time(RTC_DS1307.TimeType.MONTH, 2)
    RTC_DS1307.set_time(RTC_DS1307.TimeType.DAY, 10)

    RTC_DS1307.set_time(RTC_DS1307.TimeType.HOUR, 21)
    RTC_DS1307.set_time(RTC_DS1307.TimeType.MINUTE, 10)
    RTC_DS1307.set_time(RTC_DS1307.TimeType.SECOND, 0)

    OLED.write_string_new_line(
        "Uhrzeit gesetzt: " 
        + RTC_DS1307.get_time(RTC_DS1307.TimeType.YEAR) + "-"
        + RTC_DS1307.get_time(RTC_DS1307.TimeType.MONTH) + "-"
        + RTC_DS1307.get_time(RTC_DS1307.TimeType.DAY) + "-"
        + " "
        + RTC_DS1307.get_time(RTC_DS1307.TimeType.HOUR) + ":"
        + RTC_DS1307.get_time(RTC_DS1307.TimeType.MINUTE) + ":"
        + RTC_DS1307.get_time(RTC_DS1307.TimeType.MINUTE) + ":"
        + RTC_DS1307.get_time(RTC_DS1307.TimeType.SECOND))
input.on_button_pressed(Button.AB, on_button_pressed_ab)








