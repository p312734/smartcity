def zeropad(num: int, length: int) -> str:
    num_str = str(num)
    while len(num_str) < length:
        num_str = "0" + num_str
    return num_str

def getdatetimestr() -> str:
    strdatetime = zeropad(RTC_DS1307.get_time(RTC_DS1307.TimeType.YEAR), 4) + "-" + zeropad(RTC_DS1307.get_time(RTC_DS1307.TimeType.MONTH), 2) + "-"  + zeropad(RTC_DS1307.get_time(RTC_DS1307.TimeType.DAY), 2) + " "  + zeropad(RTC_DS1307.get_time(RTC_DS1307.TimeType.HOUR), 2) + ":" + zeropad(RTC_DS1307.get_time(RTC_DS1307.TimeType.MINUTE), 2) + ":" + zeropad(RTC_DS1307.get_time(RTC_DS1307.TimeType.SECOND), 2)
    return strdatetime

def on_logo_pressed():
    basic.show_string("L")
    
    OLED.write_string_new_line(getdatetimestr())
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_button_pressed_a():
    basic.show_string("A")
    OLED.write_string_new_line("Knopf A")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    OLED.clear()
    RTC_DS1307.set_time(RTC_DS1307.TimeType.YEAR, 2025)
    RTC_DS1307.set_time(RTC_DS1307.TimeType.MONTH, 2)
    RTC_DS1307.set_time(RTC_DS1307.TimeType.DAY, 10)
    RTC_DS1307.set_time(RTC_DS1307.TimeType.HOUR, 22)
    RTC_DS1307.set_time(RTC_DS1307.TimeType.MINUTE, 44)
    RTC_DS1307.set_time(RTC_DS1307.TimeType.SECOND, 0)
    OLED.write_string_new_line(
        "Uhrzeit gesetzt: "
                + getdatetimestr())
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_string("B")
    OLED.write_string_new_line("Knopf B")
input.on_button_pressed(Button.B, on_button_pressed_b)

OLED.init(128, 64)
datalogger.set_column_titles("datetime", "temperature_microbit", "temperatue_dht11")

def on_every_interval():
    datalogger.include_timestamp(FlashLogTimeStampFormat.SECONDS)
    datalogger.log(datalogger.create_cv("temperature", input.temperature()),
        datalogger.create_cv("light", input.light_level()))
    basic.clear_screen()
    Environment.led_brightness(AnalogPin.P2, False)
loops.every_interval(5000, on_every_interval)